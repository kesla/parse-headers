var isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    }

module.exports = function (headers) {
  if (!headers)
    return {}

  var result = {}

  headers.trim().split('\n').forEach(function (row) {
    var index = row.indexOf(':')
      , key = row.slice(0, index).trim().toLowerCase()
      , value = row.slice(index + 1).trim()

    if (typeof(result[key]) === 'undefined') {
      result[key] = value
    } else if (isArray(result[key])) {
      result[key].push(value)
    } else {
      result[key] = [ result[key], value ]
    }
  })

  return result
}
