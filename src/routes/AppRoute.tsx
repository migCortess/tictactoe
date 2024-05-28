import { Route, Routes} from "react-router-dom";
import { AppTicTacToe } from "../module/tictactoe/AppTicTacToe";

export const AppRoute = () => {

  return (
      <Routes>
            <Route
              path={`*`}
              element={<AppTicTacToe />}
            />
      </Routes>  
  );
};
