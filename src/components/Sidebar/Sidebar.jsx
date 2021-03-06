import { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import { navConfig } from '../../data/navigation';
import './Sidebar.css';

const defineStyles = isOpen => {
  const finalStales = ['Sidebar'];
  if (!isOpen) {
    finalStales.push('Sidebar-closed');
  }
  return finalStales.join(' ');
};

class Sidebar extends Component {
  state = { isOpen: true };

  toggleSidebar = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <div className={defineStyles(this.state.isOpen)}>
        <div className="Sidebar-decor"></div>
        <button
          className="toggle-btn"
          aria-label="Toggle sidebar"
          onClick={this.toggleSidebar}
        ></button>

        <Navigation navConfig={navConfig} />
      </div>
    );
  }
}

// const Sidebar = () => {
//   const isOpen = true;
//   return (
//     // <div className={`Sidebar${isOpen ? '' : 'Sidebar-closed'}`}>
//     <div className={defineStyles(isOpen)}>
//       <div className="Sidebar-decor"></div>
//       <button className="toggle-btn" aria-label="Toggle sidebar"></button>

//       <Navigation navConfig={navConfig} />
//     </div>
//   );
// };

export default Sidebar;
