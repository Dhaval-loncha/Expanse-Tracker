import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./styles/globalStyle.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { GlobalProvider } from "./context/globalContext.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<GlobalStyle />
		<GlobalProvider>
			<App />
		</GlobalProvider>
	</StrictMode>
);
