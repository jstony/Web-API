package valandur.webapi.json.serializer.player;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import org.spongepowered.api.profile.GameProfile;
import valandur.webapi.api.json.WebAPIBaseSerializer;

import java.io.IOException;

public class GameProfileSerializer extends WebAPIBaseSerializer<GameProfile> {
    @Override
    public void serialize(GameProfile value, JsonGenerator gen, SerializerProvider provider) throws IOException {
        gen.writeStartObject();
        writeField(provider, "uuid", value.getUniqueId());
        writeField(provider, "name", value.getName().orElse(null));
        gen.writeEndObject();
    }
}