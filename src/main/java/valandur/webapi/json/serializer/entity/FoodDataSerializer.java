package valandur.webapi.json.serializer.entity;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import org.spongepowered.api.data.manipulator.mutable.entity.FoodData;
import valandur.webapi.api.json.WebAPIBaseSerializer;

import java.io.IOException;

public class FoodDataSerializer extends WebAPIBaseSerializer<FoodData> {
    @Override
    public void serialize(FoodData value, JsonGenerator gen, SerializerProvider provider) throws IOException {
        gen.writeStartObject();
        writeField(provider, "foodLevel", value.foodLevel().get());
        writeField(provider, "exhaustion", value.exhaustion().get());
        writeField(provider, "saturation", value.saturation().get());
        gen.writeEndObject();
    }
}