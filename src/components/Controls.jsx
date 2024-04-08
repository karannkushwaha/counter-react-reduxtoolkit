import { useDispatch } from "react-redux";
import { counterAction } from "../store/counter";
import { privacyAction } from "../store/privacy";

const Controls = () => {
  const dispatch = useDispatch();
  const handleIncre = () => {
    dispatch(counterAction.increment());
  };
  const handleDecre = () => {
    dispatch(counterAction.decrement());
  };

  const handlePri = () => {
    dispatch(privacyAction.privacyToggle());
  };
  return (
    <>
      <div className="d-grid gap-5 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
          onClick={handleIncre}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-outline-light btn-lg px-4 "
          onClick={handleDecre}
        >
          -1
        </button>

        <button
          type="button"
          className="btn btn-outline-warning btn-lg px-4 me-sm-3 fw-bold"
          onClick={handlePri}
        >
          Privacy
        </button>
      </div>
    </>
  );
};
export default Controls;
