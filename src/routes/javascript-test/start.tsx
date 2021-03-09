// Vendors
import React from 'react';
import { useIntl } from 'react-intl';

// Components
import Link from 'components/link';
import Button from 'components/button';
import Section from 'components/section';

// Constants
import TESTS from './js-pressure-tests';

interface IProps {
	basePath: string
}

function Home ({ basePath }: IProps) {

	const intl = useIntl();

	const test = TESTS?.[0];

	return (
		<Section
			title={intl.formatMessage({ id: 'ROUTES.JAVASCRIPT_TEST.START.TITLE' })}
		>
			<Link to={`${basePath}/detail/${test?.id}`}>
				<Button label={intl.formatMessage({ id: 'ROUTES.JAVASCRIPT_TEST.START.BUTTON' })} />
			</Link>
		</Section>
	);

}

export default Home;
