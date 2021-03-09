// Vendors
import React from 'react';
import { useIntl } from 'react-intl';
import { useParams, Redirect, Route } from 'react-router-dom';

// Components
import Link from 'components/link';
import Editor from 'components/editor';
import Button from 'components/button';
import Section from 'components/section';

// Tests
import JAVASCRIPT_TESTS, { compute } from './js-pressure-tests';

interface IProps {
	basePath: string
}

function Detail ({ basePath }: IProps) {

	const { test_id } = useParams<{ test_id: string }>();
	const jsTest = JAVASCRIPT_TESTS.find(({ id }) => test_id === id);

	if (!jsTest) {
		return (
			<Route render={() => <Redirect to={basePath} />} />
		);
	}

	const intl = useIntl();
	const [valid, setValid] = React.useState(false);
	const [computed, setComputed] = React.useState(false);
	const [value, setValue] = React.useState(jsTest.template);

	const index = JAVASCRIPT_TESTS?.indexOf(jsTest);
	const has_next = index !== (JAVASCRIPT_TESTS?.length - 1);

	React.useEffect(() => {

		setValue(jsTest.template);
		setComputed(false);
		setValid(false);

	}, [jsTest.id]);

	const handleOnClick = () => {
		setValid(compute(value, jsTest));
		setComputed(true);
	};

	return (
		<Section
			title={intl.formatMessage({ id: 'ROUTES.JAVASCRIPT_TEST.DETAIL.TITLE' })}
		>
			<Editor value={value} onChange={setValue}/>
			{valid ? (
				<React.Fragment>
					{has_next ? (
						<Link to={`${basePath}/detail/${JAVASCRIPT_TESTS[index + 1].id}`}>
							<Button size="big" label={intl.formatMessage({ id: 'ROUTES.JAVASCRIPT_TEST.DETAIL.NEXT' })} />
						</Link>
					) : (
						<Link to={`${basePath}/end`}>
							<Button size="big" label={intl.formatMessage({ id: 'ROUTES.JAVASCRIPT_TEST.DETAIL.END' })} />
						</Link>
					)}
				</React.Fragment>
			) : (
				<React.Fragment>
					{computed ? (
						<Button
							size="big"
							onClick={handleOnClick}
							label={intl.formatMessage({ id: 'ROUTES.JAVASCRIPT_TEST.DETAIL.ERROR' })}
						/>
					) : (
						<Button
							size="big"
							onClick={handleOnClick}
							label={intl.formatMessage({ id: 'ROUTES.JAVASCRIPT_TEST.DETAIL.EVAL' })}
						/>
					)}
				</React.Fragment>
			)}
		</Section>
	);

}

export default Detail;
