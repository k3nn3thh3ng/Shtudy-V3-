import React from 'react';
import { connect } from 'react-redux';

import { authCheck } from '../actions/index';

import AppBar from './AppBarFolder/AppBar';
import HomePageBanner from './HomePageBanner';
import KeyFactsBanner from './KeyFactsBanner';
import LevelToggle from './LevelToggle';
import QuestionsSlider from './QuestionsShowcase';
import ShtudyInfographics from './ShtudyInfographics';
import RecentlyAddedQuestions from './RecentlyAddedQuestions';
import TopCategories from './TopCategories';
import TestimonialSlider from './AppBarFolder/TestimonialSlider';
import Footer from './Footer';


class HomePage extends React.Component{
	componentDidMount() {
		this.props.authCheck()
	}
	render() {
		return (
			<div>
				<AppBar />
				<HomePageBanner />
				<KeyFactsBanner />
				<LevelToggle />
				<QuestionsSlider />
				<ShtudyInfographics />
				<RecentlyAddedQuestions />
				<TopCategories />
				<TestimonialSlider />
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = null;
const mapDispatchToProps = { authCheck };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomePage)