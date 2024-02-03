import { Component } from 'react'
import { Text, View } from 'react-native'
import Labels from 'utils/labels'
import styles from './styles'
import { ErrorBoundaryProps, ErrorBoundaryState } from './types'

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false, error: undefined }
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error }
  }

  componentDidCatch(error: any) {
    // Log error
  }

  render() {
    const { error } = this.state
    if (!error) {
      return this.props.children
    } else {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{Labels.ERROR_PROCESSING}</Text>
        </View>
      )
    }
  }
}

export default ErrorBoundary
