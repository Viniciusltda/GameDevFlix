import React, { useEffect, useState } from 'react';

import BannerMain from '../../Components/BannerMain';
import Carousel from '../../Components/Carousel';
import DefaultPage from '../../Components/Layout';
import CategoriesRepository from '../../repositories/categories';

function Home() {
	const [dadosIniciais, setDadosIniciais] = useState([]);

	useEffect(() => {
		CategoriesRepository.getAllVideos().then((categoriesWithVideos) => {
			setDadosIniciais(categoriesWithVideos);
		});
	}, []);

	return (
		<DefaultPage paddingAll={0}>

			{dadosIniciais.map((category, index) => {
				if (index === 0) {
					return (
						<div key={category.id}>
							<BannerMain
								videoTitle={dadosIniciais[0].videos[0].titulo}
								url={dadosIniciais[0].videos[0].url}
								videoDescription="Descrubra qual Engine se encaixa melhor nos seus planos."
							/>

							<Carousel ignoreFirstVideo category={dadosIniciais[0]} />

						</div>
					);
				}

				return (
					<Carousel key={category.id} category={category} />

				);
			})}

		</DefaultPage>
	);
}

export default Home;
