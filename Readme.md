# About

One Metric is a content performance analytics tool developed by John Jones at [Adfero](http://adfero.com/) and based on Moz’s [One Content Metric to Rule Them All](https://moz.com/blog/one-metric) blog post by Trevor Klein. This tool deviates from Klein’s post both algorithmically and in execution of the tool. Whereas Klein uses a Google Spreadsheet to perform the calculation, we’re using a Node.js application to automate the entire process. In addition, our algorithm is based on Klein’s principles but uses a different recipe of analytics datasources to compute content scores.

# Installation

To use One Metric, execute the following commands. Be sure to setup the `config.json` file with your own local settings and account keys after copying it from `config.sample.json`.

```
git clone git@github.com:Adfero/One-Metric.git
cd One-Metric
cp config.sample.json config.json
vim config.json
npm install
grunt dist
node index
```