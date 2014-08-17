var parse = require('./parse-headers')

  , headers = [
        ''
      , 'Date: Sun, 17 Aug 2014 16:24:52 GMT'
      , 'Content-Type: text/html; charset=utf-8'
      , 'Transfer-Encoding: chunked'
      , ''
    ]

require('tape')(function (t) {

  t.deepEqual(parse(), {})
  t.deepEqual(parse(''), {})
  t.deepEqual(
      parse(headers.join('\r\n'))
    , {
          date: 'Sun, 17 Aug 2014 16:24:52 GMT'
        , 'content-type': 'text/html; charset=utf-8'
        , 'transfer-encoding': 'chunked'
      }
  )
  t.deepEqual(
      parse(headers.join('\n'))
    , {
          date: 'Sun, 17 Aug 2014 16:24:52 GMT'
        , 'content-type': 'text/html; charset=utf-8'
        , 'transfer-encoding': 'chunked'
      }
  )

  t.end()
})