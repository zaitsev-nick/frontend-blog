import cx from 'classnames';

type PropTypes = {
  spinnerSize: number
}

export default function Loading(props: PropTypes) {
  const { spinnerSize = 24 } = props;
  const width = `w-${spinnerSize}`;
  const height = `h-${spinnerSize}`;

  return (
    <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
      <div className="p-4 bg-gradient-to-tr animate-spin from-green-500 to-blue-500 via-purple-500 rounded-full">
        <div className="bg-white rounded-full">
          <div className={cx(width, height, "rounded-full")}></div>
        </div>
      </div>
    </div>
  )
}