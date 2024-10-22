import { Circles } from "react-loader-spinner";

function Loader() {
  return (
    <div className="flex justify-center items-center">
      <Circles
        height="80"
        width="80"
        color="gray"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loader;