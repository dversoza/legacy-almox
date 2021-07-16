package exceptions;

public class BarracaNotFoundException extends RuntimeException {
    public BarracaNotFoundException(String message) {
        super(message);
    }
}
