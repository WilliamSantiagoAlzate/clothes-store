export const Spinner = ({ color }) => (
  <div className="spinner">
    <div className={`spinner-${color}`}></div>
    <div className={`spinner-${color}`}></div>
    <div className={`spinner-${color}`}></div>
    <div className={`spinner-${color}`}></div>
  </div>
)