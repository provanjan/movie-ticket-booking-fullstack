package in.cpg.screenmanagement.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import org.springframework.stereotype.Repository;

import in.cpg.screenmanagement.domain.Screen;
import in.cpg.screenmanagement.domain.ShowsOnScreen;

@Repository
public interface ShowRepository extends CrudRepository<ShowsOnScreen, Long>{

	// TODO : 

	ShowsOnScreen save(ShowsOnScreen showsOnScreen);
	
	ShowsOnScreen findByShowName(String showName);
	
	List<ShowsOnScreen> findByTheatreId(int theatreId);
	
}

