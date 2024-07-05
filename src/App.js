import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import store from "./redux";
import Routing from "./routes/Routing";

const App = () => {
  return (
    <Provider store={store}>
      <SnackbarProvider
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        maxSnack={2}
      >
        <Routing />
      </SnackbarProvider>
    </Provider>
  );
};

export default App;
