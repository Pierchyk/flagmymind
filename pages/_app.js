import "../styles/globals.css";
import "../styles/Footer.css";
import "../styles/Home.css";
// import "../styles/Menu.css";
import "../styles/Navbar.css";
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
