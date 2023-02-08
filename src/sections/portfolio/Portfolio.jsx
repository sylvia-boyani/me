import React, { Fragment, useState } from 'react'
import "./portfolio.css"
import Menu from './portdata'

const Portfolio = () => {


	const [items, setItems] = useState(Menu)

	const filterItem = (categItem) => {
		const updatedItems = Menu.filter((cureElem) => {
			return cureElem.category === categItem;
		})
		setItems(updatedItems);
	}

	return (
		<Fragment>

			<section className="portfolio" id='portfolio'>

				<div className='port-tittle'>
					<h2>my <span>works</span></h2>
					<p>Hey here are some my projects. Most of them are school projects and
						one proffesional one that is still in progress(Tumaini Ministries Center) </p>
					<div className="port-line"></div>
				</div>

				<div class="nav">
					<ul class="nav-list">
						<li onClick={() => setItems(Menu)}>
							<a class="img-filter active">All</a>
						</li>
						<li onClick={() => filterItem('Designing')}>
							<a class="img-filter">Designing</a>
						</li>
						<li onClick={() => filterItem('frontend')}>
							<a class="img-filter">frontend</a>
						</li>
						<li onClick={() => filterItem('Backend')}>
							<a class="img-filter" >Backend</a>
						</li>

					</ul>
				</div>

				<div className="port-row">

					{
						items.map((elem) => {

							return (

								<div className="port-col" key={elem.id}>
									<div class="project-item">
										<a class="zoom1" href="#">
											<img alt="" src={elem.image} />
											<div class="overlay">
												<div class="overlay-inner">
													<h4>{elem.heading}</h4>
													<p>{elem.paragrapgh}</p>
													<a href='https://github.com/sylvia-boyani' className='btn primary' target="_blank">Source Code</a>
												</div>
											</div>
										</a>
									</div>
								</div>

							)

						})
					}



				</div>

			</section>

		</Fragment>
	)
}

export default Portfolio