import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'AWS',
    image: 'img/features/aws.png',
    description: (
      <>
        Chia sẻ về các dịch vụ trên AWS.
      </>
    ),
  },
  {
    title: 'Kỹ năng lập trình',
    image: 'img/features/code.png',
    description: (
      <>
        Chia sẻ về kỹ năng lập trình, tối ưu năng suất lập trình.
      </>
    ),
  },
  {
    title: 'Thiết kế hệ thống',
    image: 'img/features/design.png',
    description: (
      <>
        Chia sẻ kỹ năng thiết kế hệ thống chịu tải cao và độ trễ thấp.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
