import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'take notes',
    Svg: require('../HomepageFeatures/public/notes.svg').default,
    description: (
      <>
        solo explorer allows you to take notes and comment on tokens, transactions,
        and accounts that only you can see.
      </>
    ),
  },
  {
    title: 'keep track',
    Svg: require('../HomepageFeatures/public/keeptrack.svg').default,
    description: (
      <>
        solo displays all token prices in descending value, allowing users to closely follow portfolio activity.
      </>
    ),
  },
  {
    title: 'stay organized',
    Svg: require('../HomepageFeatures/public/organized.svg').default,
    description: (
      <>
        free write extended journal entries or document your holdings and transactions to stay on top 
        of your locked tokens and private wallets
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
