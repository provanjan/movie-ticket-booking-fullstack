package in.cpg.screenmanagement.serviceimpl;

import java.io.FileNotFoundException;

import java.util.ArrayList;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import in.cpg.screenmanagement.domain.Screen;
import in.cpg.screenmanagement.domain.ShowsOnScreen;
import in.cpg.screenmanagement.exception.ShowNameException;
import in.cpg.screenmanagement.repository.ScreenRepository;
import in.cpg.screenmanagement.repository.ShowRepository;
import in.cpg.screenmanagement.service.ShowService;

/**
 * We write these annotations so that our beans must understand that it is a Service layer.
 * @author PRIYAM
 *
 */
@Service
public class ShowServiceImpl implements ShowService{

	@Autowired
	private ShowRepository showRepository;

	@Autowired
	private ScreenRepository screenRepository;
	
	List<ShowsOnScreen>  listOfShowsOnScreen ;
	
	/**
	 * String showName, 
	 * @param showsOnScreen
	 * @return
	 */
//	@Override
//	public ShowsOnScreen addShowsOnScreen(ShowsOnScreen showsOnScreen) {
//	
//		/**
//		 * 
//		 * Exception: Show not found.
//		 * ShowsOnScreen  to  be added to a specific show , show != null, screen exists
//		 * Set the screen to showsonscreen
//		 * we want our projectsequence to be like Morning-001
//		 * Update the screen sequence.
//		 * add sequence to screen
//		 * initial priority when priority is null
//		 * initial  status when status is null
//		 * 
//		 */
//		
//			// 1.  ShowsOnScreen  to  be added to a specific show , show != null, screen exists
//			Screen screen2 = screenRepository.findByShowName(showName);
//			// 2.Set the screen to showsonscreen
//			showsOnScreen.setScreen(screen2);
//			// 3.We want our projectsequence to be like Morning-001
//			Integer screenSequence = screen2.getpTSequence();
//			// 4.Update the screen sequence.
//			screenSequence++;
//			screen2.setpTSequence(screenSequence);
//			// 5.Add sequence to showsonscreen
//			 showsOnScreen.setScreenSequence(showName + " - " + screenSequence);
//			 //6. Initial priority when priority is null.
//			if(showsOnScreen.getPriority() == null) {
//				showsOnScreen.setPriority(3);
//			}
//			//7. Initial  status when status is null
//			if(showsOnScreen.getStatus() == null || showsOnScreen.getStatus() == "") {
//				showsOnScreen.setStatus("TO_DO: ");
//			}
//			return showRepository.save(showsOnScreen);
//		
//		
//		
//		
//	}
	
//	@Override
//	public ShowsOnScreen saveOrUpdate(ShowsOnScreen show) {
//		//Biz logic.
//		/**
//		 * 1. When screen is created, show must be created.
//		 * 2 When screen is updated, show must not be null.
//		 * 
//		 */
//		try {
//			
//			
//			// 1. When screen is created, show must be created.
//			if(show.getId() == null) {
//				Screen screen = new Screen();
//				listOfShowsOnScreen.add(show);
//				screen.setShowList(listOfShowsOnScreen);
//			}
//			// 2 When screen is updated, show must not be null.
//			if(show.getId() != null) {
//				
//			}
//			
//			return showRepository.save(show);
//		}
//		catch (Exception ex) {
//			throw new ShowNameException("Show Name already exists with name : " + show.getShowName());
//		}
//		
//	}

	@Override
	public ShowsOnScreen findShowByShowName(String showName) {
		ShowsOnScreen show = showRepository.findByShowName(showName);
		if(show == null) {
			throw new ShowNameException("Show Name not available with name : " + showName);
		}
		return show;
	}
	
	@Override
	public List<ShowsOnScreen> findShowByTheatreId(int theatreId) {
		
		List<ShowsOnScreen> list =  showRepository.findByTheatreId(theatreId);
		return list;
	}


	@Override
	public Iterable<ShowsOnScreen> findAllShows() {
		return showRepository.findAll();
	}


	@Override
	public void deleteShowByShowName(String showName) {
		ShowsOnScreen show = showRepository.findByShowName(showName);
		if(show == null) {
			throw new ShowNameException("Show Name not available with name : " + showName);
		}
		showRepository.delete(show);		
	}

	@Override
	public ShowsOnScreen saveOrUpdate(ShowsOnScreen show) {
		
		return showRepository.save(show);
	}

	
}
