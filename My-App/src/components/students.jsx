import { useParams } from "react-router-dom";

function Student() {
  const { id } = useParams();

  return (
    <div>
      <h2>Student ID: {id}</h2>
    </div>
  );
}

export default Student;