package in.capgemini.movieticketbookingapp.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import in.capgemini.movieticketbookingapp.domain.Screen;
import in.capgemini.movieticketbookingapp.domain.ShowsOnScreen;

@Repository
public interface ScreenRepository extends CrudRepository<ShowsOnScreen, Long> {

	Screen findByShowName(String showName);

	Screen save(Screen screen);
	
}
