import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './home.css';

//--Fixed Assets
import headerLogo from '../../../assets/images/logo.png';
import optionHouse from '../../../assets/images/option-house.jpg';
import optionLand from '../../../assets/images/option-land.jpg';
import photoProfile from '../../../assets/images/profile.png';


class Home extends Component {
	render() {
		return (
			<div>
				<header className="header">
					<img src={headerLogo} alt="Header Logo" title="Header Logo" />
				</header>
				<section className="choose-what-you-search">
					<div className="container">
						<h2>Apa Yang Anda Cari?</h2>
						<div className="option">
							<Link to="/list/rumah">
								<img src={optionHouse} />
								<div className="layer"><span>RUMAH</span></div>
							</Link>
						</div>
						<div className="option">
							<Link to="/list/rumah">
								<img src={optionLand} />
								<div className="layer"><span>TANAH</span></div>
							</Link>
						</div>
					</div>
				</section>
				<section className="choose-agent">
					<div className="container">
						<h2>Agent</h2>
						<div className="option clearfix">
							<a href="#" title="">
								<div className="profile-picture">
									<img src={photoProfile} />
								</div>
								<div className="profile-data">
									<div className="name">Ester Dewi</div>
									<div className="title">Era Mulia Cengkir</div>
									<div className="phone clearfix"><i className="icon icon-phone"></i>0817151000</div>
									<div className="phone clearfix"><i className="icon icon-whatsapp"></i>0817151000</div>
								</div>
							</a>
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

export default Home;
