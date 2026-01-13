import Navbar from './Navbar';
import Footer from './Footer';
import QuickAccess from './QuickAccess';
import Breadcrumbs from './Breadcrumbs';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="pt-[72px] md:pt-[88px]">
                <Breadcrumbs />
            </div>
            <main className="flex-grow">
                {children}
            </main>
            <QuickAccess />
            <Footer />
        </div>
    );
};

export default Layout;
