// Vendors
import React from 'react';
import { useIntl } from 'react-intl';

// Components
import Link from 'components/link';
import Button from 'components/button';
import Section from 'components/section';

interface IProps {
	basePath: string
}

function End ({ basePath }: IProps) {

	const intl = useIntl();

	return (
		<Section
			title={intl.formatMessage({ id: 'ROUTES.JAVASCRIPT_TEST.END.TITLE' })}
		>
			<Link to={basePath}>
				<Button label={intl.formatMessage({ id: 'ROUTES.JAVASCRIPT_TEST.END.BUTTON' })} />
			</Link>
		</Section>
	);

}

export default End;
