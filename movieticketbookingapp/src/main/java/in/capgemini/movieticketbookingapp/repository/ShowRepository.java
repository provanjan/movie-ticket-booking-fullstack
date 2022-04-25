package in.capgemini.movieticketbookingapp.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import org.springframework.stereotype.Repository;

import in.capgemini.movieticketbookingapp.domain.Screen;
import in.capgemini.movieticketbookingapp.domain.ShowsOnScreen;

@Repository
public interface ShowRepository extends CrudRepository<ShowsOnScreen, Long>{

	// TODO : 

	ShowsOnScreen save(ShowsOnScreen showsOnScreen);
	
	ShowsOnScreen findByShowName(String showName);
	
	List<ShowsOnScreen> findByTheatreId(int theatreId);
	
}

