// import Image from "next/image";
// import styles from "../../styles/Home.module.scss";

// const WorkoutList = ({ items }) => (
//   <ul className={styles.workoutList}>
//     {items.map(
//       ({ title, subheading, stats, image: { height, width } }, idx) => (
//         <li className={styles.item} key={idx}>
//           <h3 className={styles.title}>{title}</h3>
//           <p className={styles.subheading}>{subheading}</p>
//           {/* <ul className={styles.stats}>
//             {stats.map((value, i) => (
//               <li className={styles.stat} key={i}>
//                 {value}
//               </li>
//             ))}
//           </ul> */}

//           {/* Image - Absolute */}
//           <div className={styles.image}>
//             <Image
//               height={height}
//               width={width}
//               alt={`${title} Demo Image`}
//               src={`/images/workout-items/${
//                 { 1: "first", 2: "second", 3: "third" }[idx + 1]
//               }.png`}
//             />
//           </div>
//         </li>
//       )
//     )}
//   </ul>
// );

// export default WorkoutList;








// modified by adding clickable links for the titles.




import Image from "next/image";
import styles from "../../styles/Home.module.scss";

const WorkoutList = ({ items }) => (
  <ul className={styles.workoutList}>
    {items.map(
      ({ title, subheading, stats, image: { height, width }, url }, idx) => (
        <li className={styles.item} key={idx}>
          {/* Title with clickable link */}
          <h3 className={styles.title}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h3>

          <p className={styles.subheading}>{subheading}</p>

          {/* Optional stats */}
          {/* <ul className={styles.stats}>
            {stats.map((value, i) => (
              <li className={styles.stat} key={i}>
                {value}
              </li>
            ))}
          </ul> */}

          {/* Image - clickable */}
          <div className={styles.image}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Image
                height={height}
                width={width}
                alt={`${title} Demo Image`}
                src={`/images/workout-items/${
                  { 1: "first", 2: "second", 3: "third" }[idx + 1]
                }.png`}
              />
            </a>
          </div>
        </li>
      )
    )}
  </ul>
);

export default WorkoutList;


// This code adds clickable links to the workout titles and images, allowing users to navigate to the specified URLs when they click on them. The `target="_blank"` attribute opens the link in a new tab, and `rel="noopener noreferrer"` is used for security reasons when opening links in a new tab.