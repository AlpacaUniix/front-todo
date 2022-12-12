import classNames from 'classnames'
import { FC } from 'react'
import { Spinner } from './Spinner'

export const Loading: FC<{ className?: string; initialized?: boolean }> = ({
  className,
  initialized,
}) => (
  <div
    data-testid="loading"
    className={classNames(
      'absolute inset-0 flex justify-center items-center bg-base-100',
      className
    )}
  >
    <Spinner
      size={45}
      className={classNames(initialized ? 'text-primary' : 'text-black')}
    />
  </div>
)