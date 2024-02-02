import { UserHolding } from 'features/home/services/types'

export interface ListItemProps {
  index: number
  item: UserHolding
  onPress: () => void
}
