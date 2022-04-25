package in.capgemini.movieticketbookingapp.serviceimpl;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import in.capgemini.movieticketbookingapp.domain.Ticket;
import in.capgemini.movieticketbookingapp.domain.TicketBooking;
import in.capgemini.movieticketbookingapp.exception.TicketIdException;
import in.capgemini.movieticketbookingapp.repository.IBookingRepository;
import in.capgemini.movieticketbookingapp.repository.ITicketRepository;
import in.capgemini.movieticketbookingapp.service.IBookingService;

@Component
public class BookingServiceImpl implements IBookingService {

	@Autowired
	private IBookingRepository bookingRepository;
	@Autowired
	private ITicketRepository ticketRepository;

	@Override
	public TicketBooking addBooking(TicketBooking booking) {
		try {
			booking.setTicketIdentifier(booking.getTicketIdentifier().toUpperCase());
			if(booking.getBookingId()==null) {
				Ticket ticket = new Ticket();
				booking.setTicket(ticket);
				booking.setTransactionStatus("Not paid");
				ticket.setTicketBooking(booking);
				ticket.setTicketIdentifier(booking.getTicketIdentifier().toUpperCase());
			}
			if(booking.getBookingId()!=null) {
				booking.setTicket(ticketRepository.findByTicketIdentifier(booking.getTicketIdentifier().toUpperCase()));
				
			}

			return bookingRepository.save(booking);
		} catch (Exception ex) {
			throw new TicketIdException(
					"Ticket Id: " + booking.getTicketIdentifier().toUpperCase() + " already exists");
		}
		
		
//		TicketBooking ticketBooking=bookingRepository.findByTicketIdentifier(booking.getTicketIdentifier());
//		if(ticketBooking!=null) {
//			booking.setTicket(ticketRepository.findByTicketIdentifier(booking.getTicketIdentifier().toUpperCase()));
//		}
//		if(ticketBooking==null) {
//			if(booking.getBookingId()==null) {
//				Ticket ticket = new Ticket();
//				booking.setTicket(ticket);
//				booking.setTransactionStatus("Not paid");
//				ticket.setTicketBooking(booking);
//				ticket.setTicketIdentifier(booking.getTicketIdentifier().toUpperCase());
//			}
//			if(booking.getBookingId()!=null) {
//				throw new TicketIdException("Ticket Id: " + booking.getTicketIdentifier().toUpperCase() + " already exists");
//			}
//		}
//		return bookingRepository.save(booking);
		
		
//			booking.setTicketIdentifier(booking.getTicketIdentifier().toUpperCase());
//			if(booking.getBookingId()==null) {
//				Ticket ticket=new Ticket();
//				booking.setTicket(ticket);
//				booking.setTransactionStatus("Not paid");
//				ticket.setTicketBooking(booking);
//				ticket.setTicketIdentifier(booking.getTicketIdentifier().toUpperCase());
//			}
//			if(booking.getBookingId()!=null) {
//				booking.setTicket(ticketRepository.findByTicketIdentifier(booking.getTicketIdentifier().toUpperCase()));
//			}
//			return bookingRepository.save(booking);
		
	}

	@Override
	public TicketBooking updateBooking(TicketBooking booking, String ticketIdentifier) {
		TicketBooking oldBooking = bookingRepository.findByTicketIdentifier(ticketIdentifier);
		if (oldBooking == null)
			throw new TicketIdException("No booking found with the identifier " + ticketIdentifier);
		else {
			if (booking.getBookingDate() != null)
				oldBooking.setBookingDate(booking.getBookingDate());
			if (booking.getShowId() != 0)
				oldBooking.setShowId(booking.getShowId());
			if (booking.getTransactionMode() != null)
				oldBooking.setTransactionMode(booking.getTransactionMode());
			if(booking.getCustomer()!=null)
				oldBooking.setCustomer(booking.getCustomer());
			return bookingRepository.save(oldBooking);
		}
	}

	@Override
	public void cancelBooking(String ticketIdentifier) {
		TicketBooking ticketBooking = bookingRepository.findByTicketIdentifier(ticketIdentifier.toUpperCase());
		if (ticketBooking == null) {
			throw new TicketIdException("Ticket Identifier : " + ticketIdentifier.toUpperCase() + " Does not exist");
		}
		bookingRepository.delete(ticketBooking);
	}

	@Override
	public List<TicketBooking> showBookingByMovieId(int movieId) {
		Iterable<TicketBooking> ticketBookings = bookingRepository.findAll();
		List<TicketBooking> list = new ArrayList<>();
		for (TicketBooking ticketBooking : ticketBookings) {
			if (ticketBooking.getMovieId() == movieId)
				list.add(ticketBooking);
		}
		return list;

	}

	@Override
	public Iterable<TicketBooking> showAllBooking(LocalDate date) {
		Iterable<TicketBooking> ticketBookings = bookingRepository.findAll();
		List<TicketBooking> list = new ArrayList<>();
		for (TicketBooking ticketBooking : ticketBookings) {
			if (ticketBooking.getBookingDate().equals(date))
				list.add(ticketBooking);
		}
		return list;
	}

	@Override
	public List<TicketBooking> showBooking(int showId) {
		Iterable<TicketBooking> ticketBookings = bookingRepository.findAll();
		List<TicketBooking> list = new ArrayList<>();
		for (TicketBooking ticketBooking : ticketBookings) {
			if (ticketBooking.getShowId() == showId)
				list.add(ticketBooking);
		}
		return list;
	}

	@Override
	public double calculateTotalCost(String ticketIdentifier) {
		TicketBooking ticketBooking = bookingRepository.findByTicketIdentifier(ticketIdentifier.toUpperCase());
		if (ticketBooking == null) {
			throw new TicketIdException("Ticket Identifier : " + ticketIdentifier.toUpperCase() + " Does not exist");
		} else {
			return ticketBooking.getTotalCost();
		}
	}

	@Override
	public Iterable<TicketBooking> findAllTicketBookings() {
		return bookingRepository.findAll();
	}

	@Override
	public TicketBooking findTicketBookingByTicketIdentifier(String ticketIdentifier) {
		TicketBooking ticketBooking=bookingRepository.findByTicketIdentifier(ticketIdentifier.toUpperCase());
		if(ticketBooking==null) {
			throw new TicketIdException("Ticket Identifier :"+ticketIdentifier.toUpperCase()+"Does not exist");
		}
		return ticketBooking;
	}

	
}
