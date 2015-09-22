(function($) {
  $.fn.datepicker.defaults.format = "yyyy-mm-dd";
  var reportId;

  $(document).ready(function() {
    var $form = $('.report-form');
    if ($form.length > 0) {
      reportId = $form.attr('data-report-id');
      reloadGoogleDropdownData([],['googleAccount']);
      initGoogleAnalyticsDropdowns();
      iniFacebookDropdown();
    }
    if ($('#report-chart').length > 0) {
      initChart();
    }
  });

  function initGoogleAnalyticsDropdowns() {
    $('#googleAccount').change(function(req,res) {
      reloadGoogleDropdownData(['googleAccount'],['googleProperty'])
    });
    $('#googleProperty').change(function(req,res) {
      reloadGoogleDropdownData(['googleAccount','googleProperty'],['googleProfile'])
    });
  }

  function reloadGoogleDropdownData(sendFields,updateFields,done) {
    var data = {};
    $.each(sendFields,function(i,fieldname) {
      data[fieldname] = $('#' + fieldname).val();
    });
    $.ajax('/report/' + reportId + '/ajax/google',{
      'data': data,
      'success': function(data) {
        if (data) {
          $.each(updateFields,function(i,fieldname) {
            if (data[fieldname] && data[fieldname].length >= 0) {
              var $select = $('#' + fieldname);
              $select.html('');
              $.each(data[fieldname],function(i,option) {
                var $option = $('<option></option>');
                $option.html(option.name);
                $option.prop('value',option.value);
                $select.append($option);
              });
            }
          });
          if (updateFields.length > 0) {
            var $lastField = $('#' + updateFields[updateFields.length-1]);
            var $options = $lastField.find('option');
            if ($options.length > 0) {
              $lastField.trigger('change');
            }
          }
        }
        done && done();
      }
    })
  }

  function iniFacebookDropdown() {
    $.ajax('/report/' + reportId + '/ajax/facebook',{
      'success': function(data) {
        if (data) {
          var $select = $('#facebookPage');
          $.each(data,function(i,field) {
            var $option = $('<option></option>');
            $option.prop('value',field.id);
            $option.html(field.name);
            $select.append($option);
          });
        }
      }
    });
  }

  function scoreFormula(pnct) {
    return 27 * Math.log(pnct) + 50;
  }

  function initChart() {
    var margin = {top: 20, right: 20, bottom: 30, left: 50};
    var width = 960;
    var height = 500;
    var circleWidth = 5;

    var report = JSON.parse(d3.select("#report-chart").attr('data-points'));
    var max = d3.max(report,function(d) { return d.rawScore; });
    var min = Math.min(0.01,d3.min(report,function(d) { return d.rawScore; }));

    var data = [min];
    for(var l=0.1;l<=max*1.5;l+=0.1) {
      data.push(l);
    }

    var x = d3.scale.linear()
      .range([0, width]);

    var y = d3.scale.linear()
      .range([height, 0]);

    var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom")
      .tickFormat(d3.format(".0%"));

    var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left");

    var line = d3.svg.line()
      .x(function(d) { return x(d); })
      .y(function(d) { return y(scoreFormula(d)); });

    var svg = d3
      .select("#report-chart")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    x.domain(d3.extent(data, function(d) { return d; }));
    y.domain(d3.extent(data, function(d) { return scoreFormula(d); }));

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis);

    var path = svg
      .append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", line);

    var points = svg
      .selectAll('.point')
      .data(report)
      .enter()
      .append('g')
      .attr('class','point');

    points
      .append('circle')
      .attr('r',circleWidth)
      .attr('cx',function(d) { return x(d.rawScore) })
      .attr('cy',function(d) { return y(d.score) });

    points
      .append('text')
      .attr('x',function(d) { return x(d.rawScore) + (circleWidth * 2) })
      .attr('y',function(d) { return y(d.score) + (circleWidth * 2) })
      .text(function(d) { return d.path; });
  }
})(jQuery);