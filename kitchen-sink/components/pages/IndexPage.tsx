import * as React from 'react';
import {hashHistory} from 'react-router';
import {
    Page, PageBody, PageContent,
    Navbar, Left, Center, Right,
    ContentBlock,
    ListBlock, ListItem,
    Icon,
    SidePanel, PanelSlideInType, PanelSideEnum
} from 'framework7-react';

import {routeState} from '../../utils/RouteState';
import {pages} from '../App';

export interface IIndexPageState {
    leftPanelOpen: boolean;
}

const getPages = () => {
    return pages.map((page, index) => {
        const pageTitle = page.pageTitle;
        const pageId = '/' + pageTitle.toLowerCase().replace(/\s/g, '-');

        if (index) {
            return <ListItem key={pageId} showAsLink={true} title={pageTitle} iconClass="icon-f7" onClick={() => routeState.navigate(pageId, false)} />
        } else {
            return null;
        }
    });
};

const PageList = () => {
    return (
        <ListBlock>
            {getPages()}
        </ListBlock>
    );
};

export class IndexPage extends React.Component<any, IIndexPageState> {
    constructor() {
        super();

        this.state = {
            leftPanelOpen: false
        };
    }

    public render() {
        return (
            <Page name="index">
                <SidePanel
                    isOpen={this.state.leftPanelOpen}
                    side={PanelSideEnum.Left}
                    slideInType={PanelSlideInType.Cover}
                    isSwipable={false}
                    overlayClickHandler={this.toggleLeftPanel.bind(this)}
                    additionalClassName="layout-dark"
                >
                    <ContentBlock title="Left Panel">
                        <p>
                            This is a side panel. You can close it by clicking outsite or on this link:
                            <a onClick={this.toggleLeftPanel.bind(this)} className="close-panel">close me</a>.
                        </p>
                    </ContentBlock>
                    <PageList />
                </SidePanel>
                <Navbar>
                    <Left />
                    <Center>Framework7 React</Center>
                    <Right><Icon iconClass="icon-bars" showAsLink={true} onClick={this.toggleLeftPanel.bind(this)} /></Right>
                </Navbar>
                <PageBody>
                    <PageContent>
                        <PageList />
                    </PageContent>
                </PageBody>
            </Page>
        );
    }

    private toggleLeftPanel() {
        this.setState({
            leftPanelOpen: !this.state.leftPanelOpen
        });
    }
}