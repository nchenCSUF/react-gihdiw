import React from 'react';
import ReactDOM from 'react-dom';

import { TabStrip, TabStripTab, PanelBar, PanelBarItem, PanelBarUtils, Menu, MenuItem, MenuItemModel, MenuItemLink, MenuItemArrow, Splitter, Drawer, DrawerNavigation, DrawerContent, Card, CardHeader, CardTitle, CardBody, CardActions, CardImage, Avatar } from '@progress/kendo-react-layout'
import '@progress/kendo-react-intl'
import '@progress/kendo-react-dropdowns'
import '@progress/kendo-react-buttons'
import '@progress/kendo-react-inputs'
import 'react-router-dom'

    const items = [
      { text: 'Inbox', icon: 'k-i-inbox', selected: true },
      { separator: true },
      { text: 'Notifications', icon: 'k-i-bell' },
      { text: 'Calendar', icon: 'k-i-calendar' },
      { separator: true },
      { text: 'Attachments', icon: 'k-i-hyperlink-email' },
      { text: 'Favourites', icon: 'k-i-star-outline' }
    ];

    class App extends React.Component {
        state = {
          tabSelected: 0,
          expanded: true,
          selectedId: items.findIndex(x => x.selected === true)
        };

        handleTabSelect = (e) => {
          this.setState({tabSelected: e.selected});
        }
        handleClick = () => {
          this.setState(prevState => ({expanded: !prevState.expanded }));
        }
        handleSelect = (e) => {
          this.setState({selectedId: e.selected});
          this.setState({expanded: false});
        }
        render() {
            return (
              <Drawer
                  expanded={this.state.expanded}
                  mode="overlay"
                  position="start"
                  items={items.map(
                    (item, index) => ({ ...item, selected: index === this.state.selectedId }))}
                  onOverlayClick={this.handleClick}
                  onSelect={this.handleSelect}
              >
                <DrawerContent>
                  <div className="example-wrapper container-fluid">
                    <div className="row">
                      <div className="col-xs-12 col-sm-6 example-col">
                        <p>TabStrip</p>
                        <TabStrip selected={this.state.tabSelected} onSelect={this.handleTabSelect}>
                            <TabStripTab title="Baseball" >
                                <p>
                                  Baseball is a bat-and-ball game played between two teams of nine players each, who take turns batting and fielding.
                                </p>
                                <p>
                                  The batting team attempts to score runs by hitting a ball that is thrown by the pitcher with a bat swung by the batter, then running counter-clockwise around a series of four bases: first, second, third, and home plate. A run is scored when a player advances around the bases and returns to home plate.
                                </p>
                            </TabStripTab>
                            <TabStripTab title="Basketball">
                                <p>
                                  Basketball is a sport that is played by two teams of five players on a rectangular court. The objective is to shoot a ball through a hoop 18 inches (46 cm) in diameter and mounted at a height of 10 feet (3.048 m) to backboards at each end of the court. The game was invented in 1891 by Dr. James Naismith, who would be the first basketball coach of the Kansas Jayhawks, one of the most successful programs in the game's history.
                                </p>
                            </TabStripTab>
                            <TabStripTab title="Football">
                                <p>
                                  Football is a family of team sports that involve, to varying degrees, kicking a ball with the foot to score a goal. Unqualified, the word football is understood to refer to whichever form of football is the most popular in the regional context in which the word appears.
                                </p>
                            </TabStripTab>
                        </TabStrip>
                      </div>
                      <div className="col-xs-12 col-sm-6 example-col">
                        <p>PanelBar</p>
                        <PanelBar>
                          <PanelBarItem title="Invasion Games">
                            <PanelBarItem title="Hockey"></PanelBarItem>
                            <PanelBarItem title="Soccer"></PanelBarItem>
                            <PanelBarItem title="Rugby"></PanelBarItem>
                          </PanelBarItem>
                          <PanelBarItem title="Net & Court Games" expanded="true">
                            <PanelBarItem title="Badminton"></PanelBarItem>
                            <PanelBarItem title="Squash"></PanelBarItem>
                            <PanelBarItem title="Tennis" selected={true}></PanelBarItem>
                            <PanelBarItem title="Table Tennis"></PanelBarItem>
                            <PanelBarItem title="Volleyball"></PanelBarItem>
                          </PanelBarItem>
                          <PanelBarItem title="Target Games">
                            <PanelBarItem title="Golf"></PanelBarItem>
                            <PanelBarItem title="Lawn bowls"></PanelBarItem>
                            <PanelBarItem title="Tenpin bowling"></PanelBarItem>
                          </PanelBarItem>
                        </PanelBar>
                      </div>
                      <div className="col-xs-12 example-col">
                        <p>Menu</p>
                        <Menu>
                          <MenuItem text="Invasion Games">
                            <MenuItem text="Hockey" />
                            <MenuItem text="Soccer" />
                            <MenuItem text="Rugby" />
                          </MenuItem>
                          <MenuItem text="Net & Court Games">
                            <MenuItem text="Badminton" />
                            <MenuItem text="Squash" />
                            <MenuItem text="Tennis" />
                            <MenuItem text="Table Tennis" />
                            <MenuItem text="Volleyball" />
                          </MenuItem>
                          <MenuItem text="Target Games">
                            <MenuItem text="Golf" />
                            <MenuItem text="Lawn bowls" />
                            <MenuItem text="Tenpin bowling" />
                          </MenuItem>
                        </Menu>
                      </div>
                      <div className="col-xs-12 example-col">
                        <p>Card</p>
                        <Card style={{width: 300}}>
                          <CardImage src={"https://demos.telerik.com/kendo-ui/content/web/cards/barcelona.jpg"}/>
                          <CardHeader>
                            <CardTitle>
                              Barcelona
                            </CardTitle>
                          </CardHeader>
                          <CardBody>
                          <p>Barcelona, the cosmopolitan capital of Spain's Catalonia region, is known for its art and architecture.</p>
                          <p>The fantastical Sagrada FamÃ­lia church and other modernist landmarks designed by Antoni GaudÃ­ dot the city.</p>
                          </CardBody>
                          <CardActions>
                            <span><span className="k-button k-flat k-primary">Map</span></span>
                            <span><span className="k-button k-flat k-primary">Weather</span></span>
                          </CardActions>
                        </Card>
                      </div>
                      <div className="col-xs-12 col-sm-6 example-col">
                        <p>Drawer</p>
                        <button className="k-button" onClick={this.handleClick}>Toggle Drawer state</button>
                      </div>
                      <div className="col-xs-12 example-col">
                        <p>Avatar</p>
                        <Avatar type="initials" shape="circle" style={{ width: 100, height: 100 }}><span>KR</span></Avatar>
                      </div>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            )
        }
    }

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
);

