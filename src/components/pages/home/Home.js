import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

//--Fixed Assets
import headerLogo from '../../../assets/images/logo.png';
// import optionHouse from '../../../assets/images/option-house.jpg';
import optionLand from '../../../assets/images/option-land.jpg';
import photoProfile from '../../../assets/images/profile.png';


class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			propertyCategory: [],
		};
	}

	componentDidMount() {
		this.fetchPropertyCategoryList();
	}

	fetchPropertyCategoryList = () => {
		axios.get('http://localhost/api/propertiobral/property-category?api_token=307810a911bd3eaae1a54d6e5b69de14cfbd71f3')
			.then((response) => {
				let propertyCategory = response.data.message;
				this.setState({
					propertyCategory
				});

			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<div>
				<Helmet>
					<title>Home Page</title>
					<meta name="description" content="Helmet application" />
				</Helmet>
				<header className="header">
					<img src={headerLogo} alt="Header Logo" title="Header Logo" />
				</header>
				<section className="choose-what-you-search">
					<div className="container">
						<h2>Apa Yang Anda Cari?</h2>
						{ this.state.propertyCategory.map((list, key) => {
							return <PropertyCategory key={key} list={list} />;
						})}
					</div>
				</section>
				<section className="choose-agent">
					<div className="container">
						<h2>Agent</h2>
						<div className="option clearfix">
							<Link to="/list/rumah">
								<div className="profile-picture">
									<img src={photoProfile} alt="Logo" />
								</div>
								<div className="profile-data">
									<div className="name">Ester Dewi</div>
									<div className="title">Era Mulia Cengkir</div>
									<div className="phone clearfix"><i className="icon icon-phone"></i>0817151000</div>
									<div className="phone clearfix"><i className="icon icon-whatsapp"></i>0817151000</div>
								</div>
							</Link>
						</div>
					</div>
				</section>
				<footer>
					<div className="copyright">
						<div className="container">
							Copyright &copy;2017 Properti Obral
						</div>
					</div>
				</footer>
			</div>
		);
	}
}

const PropertyCategory = ({list}) => (
	<div className="option">
		<Link to="/list/rumah">
			<img src={list.picture_url} alt={list.name} />
			<div className="layer"><span>{list.name}</span></div>
		</Link>
	</div>
);

PropertyCategory.propTypes = {
	list: PropTypes.object,
};

export default Home;
