package in.cpg.screenmanagement.web;

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

import in.cpg.screenmanagement.domain.Screen;
import in.cpg.screenmanagement.domain.ShowsOnScreen;
import in.cpg.screenmanagement.repository.ScreenRepository;
import in.cpg.screenmanagement.repository.ShowRepository;
import in.cpg.screenmanagement.service.ScreenService;
import in.cpg.screenmanagement.service.ShowService;
import in.cpg.screenmanagement.serviceimpl.MapValidationErrorService;

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
		ResponseEntity<?> errorMap = mapValidationErrorService.mapValidaationError(result);
		if(errorMap != null) return errorMap;
		
		Screen screen2 = screenService.saveOrUpdate(screen);
		return new ResponseEntity<Screen>(screen2, HttpStatus.CREATED);
	}
	
	@PostMapping("/{showName}")
	public ResponseEntity<?> createNewShow(@Valid @RequestBody ShowsOnScreen show, BindingResult result, String showName) {
	    ResponseEntity<?> errorMap  =	mapValidationErrorService.mapValidaationError(result);
	    if(errorMap != null) return errorMap;
	    
		ShowsOnScreen savedShow = showService.saveOrUpdate(show);
		return new ResponseEntity<ShowsOnScreen>(savedShow, HttpStatus.CREATED);
	}
}
