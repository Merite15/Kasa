import { Header } from "@/components/Header";

import { Footer } from "@/components/Footer";

import "./index.scss";

export const Main = ({ children }) => {
    return (
        <div className="container">
            <Header />
            {children}
            <Footer />
        </div>
    );
}