package in.capgemini.movieticketbookingapp.web;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.capgemini.movieticketbookingapp.domain.ShowsOnScreen;
import in.capgemini.movieticketbookingapp.service.ShowService;
import in.capgemini.movieticketbookingapp.serviceimpl.MapValidationErrorService;


/**
 * We have named the package as 'web' because our controller is not directing us to any view rather it is 
 * returning us the data in .json format as a REST API.
 * 
 * @author PRIYAM
 *
 */
@RestController
@RequestMapping("/api/shows")
@CrossOrigin
public class ShowController {
	
	@Autowired
	private ShowService showService;
	
	/**
	 * Reads the json and map the json into Show object, i.e. show.
	 * @return
	 */
	
	@Autowired
	private MapValidationErrorService mapValidationErrorService;
	
	
	@PostMapping("")
	public ResponseEntity<?> createNewShow(@Valid @RequestBody ShowsOnScreen show, BindingResult result) {
	    ResponseEntity<?> errorMap  =	mapValidationErrorService.mapValidationError(result);
	    if(errorMap != null) return errorMap;
	    
		ShowsOnScreen savedShow = showService.saveOrUpdate(show);
		return new ResponseEntity<ShowsOnScreen>(savedShow, HttpStatus.CREATED);
	}
	
	@GetMapping("/theatre/{theatreId}")
	public ResponseEntity<?> getShowByTheatreId(@PathVariable int theatreId){
		List<ShowsOnScreen> show = showService.findShowByTheatreId(theatreId);
		return new ResponseEntity<List<ShowsOnScreen>>(show, HttpStatus.OK);
		
	}
	
	@GetMapping("/{showName}")
	public ResponseEntity<?> getShowByShowName(@PathVariable String showName){
		ShowsOnScreen show = showService.findShowByShowName(showName);
		return new ResponseEntity<ShowsOnScreen>(show, HttpStatus.OK);
		
	}

	@GetMapping("/all")
	public Iterable<ShowsOnScreen> getAllShows(){
		return showService.findAllShows();
	}
	
	
	
	@DeleteMapping("/{showName}")
	public ResponseEntity<?> deleteShow(@PathVariable String showName){
		showService.deleteShowByShowName(showName);
		return new ResponseEntity<String>("Show with Show Name : " + showName + " is deleted.", HttpStatus.OK); 
	}
}

