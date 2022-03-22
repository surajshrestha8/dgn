import { AppBar, AppBarSection, AppBarSpacer} from '@progress/kendo-react-layout';
const Header = () => {
    return (
        <AppBar style={{ backgroundColor: '#5b8af0', color: 'white' }}>
            <AppBarSection>
                <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base">
                <span className="k-icon k-i-menu" />
                </button>
            </AppBarSection>
            <AppBarSpacer style={{ width : 8 }} />
            <AppBarSection>
                <h3 className="title">DGH-CMS</h3>
            </AppBarSection>

        </AppBar>
    )
}

export default Header;