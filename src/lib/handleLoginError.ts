import { toast } from 'react-toastify'

const handleLoginError = (params: URLSearchParams): void => {
  const errors = params.getAll('error')
  let flattenedErrors: string[] = []

  errors.forEach(error => {
    flattenedErrors = flattenedErrors.concat(error.split(',')) // add any errors that might be comma delimited
  })

  flattenedErrors.forEach(error => {
    showError(error)
  })
}

const showError = (error: string) => {
  switch (error) {
    case 'OAuthSignin':
      toast.error('There was an issue constructing an authorization URL. Please try again.', {
        autoClose: false,
        toastId: error,
      })
      break
    case 'OAuthCallback':
      toast.error('There was an error in handling the response from the OAuth provider. Please try again.', {
        autoClose: false,
        toastId: error,
      })
      break
    case 'OAuthAccountNotLinked':
      toast.error(
        'That email account has already been linked with another provider. Please sign in with that provider instead.',
        { autoClose: false, toastId: error }
      )
      break
    case 'CredentialsInvalid':
      toast.error('Invalid email/password combination. Please try again', { autoClose: false, toastId: error })
      break
    case 'UnauthorizedError':
      toast.error('You must be logged in to access that.', { autoClose: false, toastId: error })
      break
    default:
      toast.error('An error occurred when trying to login. Please try again.', { autoClose: false, toastId: error })
  }
}

export default handleLoginError
