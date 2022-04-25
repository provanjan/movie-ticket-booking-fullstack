package in.capgemini.movieticketbookingapp.service;


import in.capgemini.movieticketbookingapp.domain.Screen;
import in.capgemini.movieticketbookingapp.domain.ShowsOnScreen;

public interface ScreenService {

	public Screen saveOrUpdate(Screen screen);
}
