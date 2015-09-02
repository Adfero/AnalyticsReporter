(function($) {
  $.fn.datepicker.defaults.format = "yyyy-mm-dd";

  $(document).ready(function() {
    if ($('#google-analytics-account').length > 0) {
      reloadGoogleDropdownData([],['google-account']);
      initGoogleAnalyticsDropdowns();
    }
  });

  function initGoogleAnalyticsDropdowns() {
    $('#google-account').change(function(req,res) {
      reloadGoogleDropdownData(['google-account'],['google-property'])
    });
    $('#google-property').change(function(req,res) {
      reloadGoogleDropdownData(['google-account','google-property'],['google-profile'])
    });
  }

  function reloadGoogleDropdownData(sendFields,updateFields,done) {
    var data = {};
    $.each(sendFields,function(i,fieldname) {
      data[fieldname] = $('#' + fieldname).val();
    });
    $.ajax('/ajax/google',{
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
})(jQuery);