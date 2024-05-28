import { Route, Routes} from "react-router-dom";
import BoardGame from "../pages/BoardGame";

export const AppRoute = () => {

  return (
      <Routes>
            <Route
              path={`*`}
              element={<BoardGame/>}
            />
      </Routes>  
  );
};