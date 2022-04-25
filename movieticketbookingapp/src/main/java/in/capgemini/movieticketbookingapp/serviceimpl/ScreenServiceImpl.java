package  in.capgemini.movieticketbookingapp.serviceimpl;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import  in.capgemini.movieticketbookingapp.domain.Screen;
import  in.capgemini.movieticketbookingapp.domain.ShowsOnScreen;
import  in.capgemini.movieticketbookingapp.exception.ShowNameException;
import  in.capgemini.movieticketbookingapp.repository.ScreenRepository;
import  in.capgemini.movieticketbookingapp.repository.ShowRepository;
import  in.capgemini.movieticketbookingapp.service.ScreenService;

@Service
public class ScreenServiceImpl implements ScreenService{

	@Autowired
	private ShowRepository showRepository;

	@Autowired
	private ScreenRepository screenRepository;
	
	List<ShowsOnScreen> listOfShowsOnScreens;
	/**
	 * String showName, 
	 * @param showsOnScreen
	 * @return
	 */
	
//	@Override
//	public Screen saveOrUpdate(Screen screen) {
//		
//		//Business Logic
//		
//		try {
//			screen.setShowName(screen.getShowName());
//			
//			//1.When Screen is created, Show should be created.
//			if(screen.getId() == null) {
//				ShowsOnScreen showsOnScreen = new ShowsOnScreen();
//				screen.setShowList(null);
//				showsOnScreen.setScreen(screen);
//				showsOnScreen.setShowName(screen.getShowName());
//			}
//			
//			//2. When Screen is updated, Show should not be null.
//			if(screen.getId() != null) {
//				listOfShowsOnScreens.add(showRepository.findByShowName(screen.getShowName()));
//				screen.setShowList(listOfShowsOnScreens);
////				screen.setShowsOnScreen(showRepository.findByShowName(screen.getShowName()));
//			return screenRepository.save(screen);
//			}
//			catch (Exception ) {
//			throw new ShowNameException("Show Name already exists with name : " + screen.getShowName());
//		}
			@Override
			public Screen saveOrUpdate(Screen screen) {
				// TODO Auto-generated method stub
				return null;
			}
		
		
	}
