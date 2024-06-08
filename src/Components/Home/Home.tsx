import { Link } from 'react-router-dom'; // For navigation links (assuming you're using React Router)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero">
        <h1>Visualize Algorithms and Level Up Your Coding Skills</h1>
        <p>
          Explore interactive visualizations of common algorithms, making them easier to understand and apply.
        </p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Algorithms"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className="level-selector">
          <span>Level:</span>
          <button>Beginner</button>
          <button>Intermediate</button>
          <button>Advanced</button>
        </div>
      </div>

      {/* Featured Topics Section */}
      <div className="featured-topics">
        <h2>Featured Topics</h2>
        <div className="topic-cards">
          <Link to="/sorting">
            <div className="topic-card">
              <h3>Sorting</h3>
              <p>Visualize different sorting algorithms like Bubble Sort, Merge Sort, and Quick Sort.</p>
            </div>
          </Link>
          <Link to="/binary-search">
            <div className="topic-card">
              <h3>Binary Search</h3>
              <p>See how binary search efficiently locates elements in a sorted array.</p>
            </div>
          </Link>
          <Link to="/recursion">
            <div className="topic-card">
              <h3>Recursion</h3>
              <p>Understand the power of recursive functions and how they work.</p>
            </div>
          </Link>
          {/* Add more topic cards here */}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="benefits">
        <h2>Benefits of Visualizing Algorithms</h2>
        <ul>
          <li>Interactive visualizations make learning engaging and intuitive.</li>
          <li>Experiment with different algorithms and see how they work step-by-step.</li>
          <li>Suitable for both beginners and experienced programmers.</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="call-to-action">
        <Link to="/algorithms">Explore Algorithms</Link>
      </div>
    </div>
  );
}

export default Home;

// import AlgorithmIcon from '../../assets/Icons/AlgorithmIcon'
// import './styles.css';

// const Home = () => {
//   return (
//     <>
//       <div className='heroSection'>

//         <div className="heading">
//           <AlgorithmIcon />
//           <h1>Algorithm Visualizer</h1>
//         </div>
//         <p className="headline">Visualize Algorithms and Level Up Your Coding Skills</p>
//         <p className="purpose">Explore interactive visualizations of common algorithms, making them easier to understand and apply.
//         </p>
//         <div className="searchContainer">
//           <input type="text" className="searchBar" />
//           <button className="searchBtn">
//             Search
//           </button>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Home