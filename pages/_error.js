import Router from 'next/router'

function ErrorPage() {
  return null
}

ErrorPage.getInitialProps = ({ res, asPath }) => {
  if (asPath !== '/404') {
    if (res && !res.headersSent) {
      res.writeHead(302, { Location: '/404' })
      res.end()
    } else if (typeof window !== 'undefined') {
      Router.replace('/404')
    }
  }

  return {}
}

export default ErrorPage
