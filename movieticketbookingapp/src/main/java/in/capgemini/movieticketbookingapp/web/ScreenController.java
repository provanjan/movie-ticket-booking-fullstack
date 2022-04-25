package in.capgemini.movieticketbookingapp.web;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.capgemini.movieticketbookingapp.domain.Screen;
import in.capgemini.movieticketbookingapp.domain.ShowsOnScreen;
import in.capgemini.movieticketbookingapp.repository.ScreenRepository;
import in.capgemini.movieticketbookingapp.repository.ShowRepository;
import in.capgemini.movieticketbookingapp.service.ScreenService;
import in.capgemini.movieticketbookingapp.service.ShowService;
import in.capgemini.movieticketbookingapp.serviceimpl.MapValidationErrorService;

@RestController
@RequestMapping("/api/screen")
public class ScreenController {

	@Autowired
	private ScreenService screenService;
	
	@Autowired
	private ShowService showService;
	
	@Autowired
	private MapValidationErrorService mapValidationErrorService;
	
	/**
	 * , @PathVariable String screen_id
	 * screen_id, 
	 * @param showsOnScreen
	 * @param result
	 * @return
	 */
	@PostMapping("") 
	public ResponseEntity<?> save(@Valid @RequestBody Screen screen, String showName, BindingResult result){
		ResponseEntity<?> errorMap = mapValidationErrorService.mapValidationError(result);
		if(errorMap != null) return errorMap;
		
		Screen screen2 = screenService.saveOrUpdate(screen);
		return new ResponseEntity<Screen>(screen2, HttpStatus.CREATED);
	}
	
	@PostMapping("/{showName}")
	public ResponseEntity<?> createNewShow(@Valid @RequestBody ShowsOnScreen show, BindingResult result, String showName) {
	    ResponseEntity<?> errorMap  =	mapValidationErrorService.mapValidationError(result);
	    if(errorMap != null) return errorMap;
	    
		ShowsOnScreen savedShow = showService.saveOrUpdate(show);
		return new ResponseEntity<ShowsOnScreen>(savedShow, HttpStatus.CREATED);
	}
}
