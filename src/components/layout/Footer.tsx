import { AppBar, AppBarSection} from '@progress/kendo-react-layout';
const Footer = () => {
    return (
        <AppBar position="bottom" positionMode="sticky" style={{ justifyContent: 'center' }}>
            <AppBarSection>
                <h3 className="title">Copyright @DGH-CMS</h3>
            </AppBarSection>
        </AppBar>
    )
}
export default Footer;