import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { useRef } from "react";
import { counterAction } from "../store/counter";

const FormControl = () => {
  const dispatch = useDispatch();
  const inputEle = useRef();
  const handleAdd = () => {
    dispatch(counterAction.add({ num: inputEle.current.value }));
    inputEle.current.value = "";
  };
  const handlesub = () => {
    dispatch(counterAction.sub({ num: inputEle.current.value }));
    inputEle.current.value = "";
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Enter a number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter a Number"
            required
            ref={inputEle}
          />
        </Form.Group>
      </Form>
      <button
        type="button"
        className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
        onClick={handleAdd}
      >
        Add
      </button>
      <button
        type="button"
        className="btn btn-outline-danger btn-lg px-4"
        onClick={handlesub}
      >
        Subtract
      </button>
    </>
  );
};
export default FormControl;
