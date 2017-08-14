import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
// import { Link } from 'react-router-dom';
// import logo from '../../../assets/images/logo.svg';
import './list.css';

class List extends Component {
	render() {
		return (
			<div>
				<Helmet>
					<title>About Page</title>
					<meta name="description" content="Helmet application" />
				</Helmet>
				<header className="header-list">
					<div className="container">
						<a href="index.html" title="Balik ke Halaman Utama">
							<i className="icon icon-arrow-left"></i>
						</a>
						<div className="model-1">
							<h1>Rumah</h1>
						</div>
					</div>
				</header>
				<div className="header-list-body">
					<section className="product-list">
						<div className="list">
							<a href="detail.html" title="">
								<div className="picture">
									<img src="../assets/images/r1.jpg" alt="" title="" />
									<div className="tag red-tag">
										<div className="post-tag"><span>Jual</span></div>
									</div>
								</div>
								<div className="detail">
									<h2 className="title ellipsis">Rumah Gading Murah</h2>
									<p className="location">Kelapa Gading, Jakarta Utara</p>
									<p className="price">Rp. 6.500.000.000</p>
									<p className="size">LB/LT: <span>250/275 m2</span></p>
								</div>
							</a>
						</div>
						<div className="list">
							<div className="picture">
								<img src="../assets/images/1.jpg" alt="" title="" />
								<div className="tag green-tag">
									<div className="post-tag"><span>Sewa</span></div>
								</div>
							</div>
							<div className="detail">
								<h2 className="title ellipsis">Golden City</h2>
								<p className="location">Bekasi Utara</p>
								<p className="price">Rp. 6.500.000.000</p>
								<p className="size">LB/LT: <span>250/275 m2</span></p>
							</div>
						</div>
						<div className="list">
							<div className="picture">
								<img src="../assets/images/1.jpg" alt="" title="" />
								<div className="tag green-tag">
									<div className="post-tag"><span>Sewa</span></div>
								</div>
							</div>
							<div className="detail">
								<h2 className="title ellipsis">Golden City</h2>
								<p className="location">Bekasi Utara</p>
								<p className="price">Rp. 6.500.000.000</p>
								<p className="size">LB/LT: <span>250/275 m2</span></p>
							</div>
						</div>
						<div className="list">
							<div className="picture">
								<img src="../assets/images/1.jpg" alt="" title="" />
								<div className="tag green-tag">
									<div className="post-tag"><span>Sewa</span></div>
								</div>
							</div>
							<div className="detail">
								<h2 className="title ellipsis">Golden City</h2>
								<p className="location">Bekasi Utara</p>
								<p className="price">Rp. 6.500.000.000</p>
								<p className="size">LB/LT: <span>250/275 m2</span></p>
							</div>
						</div>
						<div className="list">
							<div className="picture">
								<img src="../assets/images/1.jpg" alt="" title="" />
								<div className="tag green-tag">
									<div className="post-tag"><span>Sewa</span></div>
								</div>
							</div>
							<div className="detail">
								<h2 className="title ellipsis">Golden City</h2>
								<p className="location">Bekasi Utara</p>
								<p className="price">Rp. 6.500.000.000</p>
								<p className="size">LB/LT: <span>250/275 m2</span></p>
							</div>
						</div>
					</section>
				</div>

			</div>
		);
	}
}

export default List;
