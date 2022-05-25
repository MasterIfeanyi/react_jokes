const Footer = () => {

    const today = new Date();

    return (
        <footer>
            <div className="container">
                <div className="row">
                    <p>Chima Ifeanyi &copy; {today.getFullYear()}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
